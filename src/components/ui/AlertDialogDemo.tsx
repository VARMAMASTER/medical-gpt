import * as React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const AlertDialogDemo = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:scale-105 transition">
          Delete Account
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <AlertDialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-card border border-border rounded-lg shadow-lg p-6 max-w-md w-[90vw]">
          <AlertDialog.Title className="text-lg font-semibold text-text mb-2">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="text-muted mb-4">
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialog.Description>
          <div className="flex justify-end gap-3">
            <AlertDialog.Cancel asChild>
              <button className="px-4 py-2 rounded border border-border text-text bg-background hover:bg-card/50 transition">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className="px-4 py-2 rounded bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition">
                Delete
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertDialogDemo;
