import { ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
  description?: string;
}

export function PageHeader({ children, description }: PageHeaderProps) {
  return (
    <div className="mb-8 border-b pb-4">
      {children}
      {description && (
        <p className="text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
}