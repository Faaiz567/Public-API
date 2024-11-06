// app/protected/page.tsx
import { FC } from "react";

const ProtectedPage: FC = () => {
  return (
    <div>
      <h1 className=" text-xl hover:font-bold pl-5">Protected Page</h1>
      <p>This page is only accessible after login.</p>
    </div>
  );
};

export default ProtectedPage;
