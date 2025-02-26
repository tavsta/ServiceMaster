import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";

const phoneSchema = z.object({
  phone: z.string().min(10).max(11),
});

const otpSchema = z.object({
  otp: z.string().length(6),
});

export default function Login() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const phoneForm = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const requestOtp = useMutation({
    mutationFn: async (phone: string) => {
      await apiRequest("POST", "/api/auth/request-otp", { phone });
    },
    onSuccess: () => {
      setStep("otp");
      toast({
        title: "Mã OTP đã được gửi",
        description: "Vui lòng nhập mã OTP: 123456",
      });
    },
  });

  const verifyOtp = useMutation({
    mutationFn: async (otp: string) => {
      await apiRequest("POST", "/api/auth/verify-otp", { phone, otp });
    },
    onSuccess: () => {
      toast({
        title: "Đăng nhập thành công",
      });
      navigate("/");
    },
  });

  const onPhoneSubmit = (data: z.infer<typeof phoneSchema>) => {
    setPhone(data.phone);
    requestOtp.mutate(data.phone);
  };

  const onOtpSubmit = (data: z.infer<typeof otpSchema>) => {
    verifyOtp.mutate(data.otp);
  };

  const handleBack = () => {
    setStep("phone");
    otpForm.reset();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Đăng nhập</CardTitle>
            {step === "otp" && (
              <CardDescription>
                Số điện thoại: {phone}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {step === "phone" ? (
              <Form {...phoneForm}>
                <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-4">
                  <FormField
                    control={phoneForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Số điện thoại</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="0389167693" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={requestOtp.isPending}>
                    Tiếp tục
                  </Button>
                </form>
              </Form>
            ) : (
              <Form {...otpForm}>
                <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-4">
                  <FormField
                    control={otpForm.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mã OTP</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="123456" maxLength={6} />
                        </FormControl>
                        <FormDescription>
                          Mã OTP mặc định là: 123456
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleBack}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Quay lại
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1" 
                      disabled={verifyOtp.isPending}
                    >
                      Xác nhận
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}