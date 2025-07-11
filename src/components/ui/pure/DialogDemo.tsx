import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const DialogDemo = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:scale-105 transition">
          Edit Profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-card border border-border rounded-lg shadow-lg p-6 max-w-md w-[90vw]">
          <Dialog.Title className="text-lg font-semibold text-text mb-4">
            Edit profile
          </Dialog.Title>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted block mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="w-full px-3 py-2 bg-background border border-border rounded text-text focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Pedro Duarte"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted block mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                className="w-full px-3 py-2 bg-background border border-border rounded text-text focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="@peduarte"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Dialog.Close asChild>
              <button className="px-4 py-2 rounded border border-border text-text bg-background hover:bg-card/50 transition">
                Cancel
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">
                Save changes
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
