export default function Subtitle({ text }: { text: string }) {
  return (
    <h2 className="mb-6 text-2xl font-semibold leading-none text-blue-100/90">
      {text}
    </h2>
  );
}
