type Props = {
  children: React.ReactNode;
  title: string;
};

export const LinkSection = ({ children, title }: Props) => {
  return (
    <div className="flex-1">
      <h4 className="text-sm font-semibold">{title}</h4>
      <div className="flex flex-col gap-2 mt-2">{children}</div>
    </div>
  );
};
