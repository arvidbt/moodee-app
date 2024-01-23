interface Props {
  error_name: string;
  error_message: string;
}

export default function DisplayError({ error_name, error_message }: Props) {
  return (
    <div className="w-full bg-app-red p-4 rounded-sm">
      <div className="flex flex-col flex-1">
        <h1 className="font-black underline">{error_name}</h1>
        <p className="font-medium">{error_message}</p>
      </div>
    </div>
  );
}
