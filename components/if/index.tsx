type IfProps = {
  condition: boolean;
  children: any;
};

const If = ({ children, condition }: IfProps) => {
  if (!condition) return null;
  return children;
};
export default If;
