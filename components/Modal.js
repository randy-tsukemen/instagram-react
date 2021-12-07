import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center min-h-[800px] pt-4 px-4 pb-20 text-center sm:min-h-screen sm:p-0
          sm-block"
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents */}
          {/* <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left
                overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
                sm:p-6"
            >
              <div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent
                    shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm
                    disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
                  >
                    Upload Post
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
