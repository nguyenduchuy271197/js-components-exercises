export default function Overlay({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30"
      onClick={() => setIsOpen(false)}
    ></div>
  );
}
