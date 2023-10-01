import { Card } from "@/components/ui/card";

export const CardContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <Card
      id={id}
      className="bg-cyan-50 dark:bg-cyan-950 border-solid border-8 border-gray-950 dark:border-cyan-100 flex flex-col items-start justify-center mx-10 sm:mx-20 xl:mx-96 sm:my-20 mb-10 p-10 "
    >
      {children}
    </Card>
  );
};
