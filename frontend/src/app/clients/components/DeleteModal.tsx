export default function DeleteModal({
  closeModal,
  deleteFunction,
}: {
  closeModal: () => void;
  deleteFunction: () => void;
}) {
  return (
    <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Excluir Cliente</h2>
        <p className="text-center mb-4">Tem certeza de que deseja excluir este cliente? Esta ação não pode ser desfeita.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              deleteFunction()
              closeModal();
            }}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}