const ModalZoom = ({ foto }) => {
  return (
    <>
      <dialog open={!!foto}>
        <p>Saudações!</p>
        <form method="dialog">
          <button>Ok</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalZoom;
