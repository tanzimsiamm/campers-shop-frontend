
type TSuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

const SuccessModal = ({ open, onClose }: TSuccessModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-md p-6 shadow-lg">
        <h2 className="text-lg font-semibold">Success!</h2>
        <p>Your new product has been created successfully.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
