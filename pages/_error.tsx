// Internal modules
import If from "@/components/if";

const Error = ({ statusCode }: any) => (
  <>
    <If condition={statusCode !== null}>
      <h1>{`An error ${statusCode} occurred on server`} </h1>
    </If>
    <If condition={statusCode === null}>
      <h1>An error occurred on client</h1>
    </If>
  </>
);

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
