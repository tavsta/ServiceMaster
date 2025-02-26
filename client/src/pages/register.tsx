import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const phoneSchema = z.object({
  phone: z.string().min(10).max(11),
});

const otpSchema = z.object({
  otp: z.string().length(6),
});

export default function Register() {
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
      await apiRequest("POST", "/api/auth/register/request-otp", { phone });
    },
    onSuccess: () => {
      setStep("otp");
      toast({
        title: "Mã OTP đã được gửi",
        description: "Vui lòng kiểm tra điện thoại của bạn",
      });
    },
  });

  const verifyOtp = useMutation({
    mutationFn: async (otp: string) => {
      await apiRequest("POST", "/api/auth/register/verify-otp", { phone, otp });
    },
    onSuccess: () => {
      toast({
        title: "Đăng ký thành công",
        description: "Vui lòng đăng nhập để tiếp tục",
      });
      navigate("/login");
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
            <CardTitle>Đăng ký</CardTitle>
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
                          <Input {...field} placeholder="Nhập số điện thoại" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2">
                    <Button type="submit" className="w-full" disabled={requestOtp.isPending}>
                      Tiếp tục
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Đã có tài khoản?{" "}
                      <Link href="/login" className="text-primary hover:underline">
                        Đăng nhập
                      </Link>
                    </p>
                  </div>
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
                          <Input {...field} placeholder="Nhập mã OTP" maxLength={6} value={field.value} />
                        </FormControl>
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
