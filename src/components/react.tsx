import { useTina } from "tinacms/dist/react";

export const MyComponent = (props) => {
  const { data } = useTina(props);

  return (
    <div style={{display:"grid", placeContent:"center"}}>
      <p>
        {JSON.stringify(data?.post?.body, null, 2)}
      </p>
    </div>
  );
};
