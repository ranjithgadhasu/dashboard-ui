import { useEffect, useState } from "react";
import ComposeHeader from "./ComposeHeader";
import ComposeRecipients from "./ComposeRecipients";
import ComposeSubject from "./ComposeSubject";
import ComposeToolbar from "./ComposeToolbar";
import ComposeEditor from "./ComposeEditor";
import ComposeAttachments from "./ComposeAttachments";
import ComposeFooter from "./ComposeFooter";
import "./mailcoompose.css"



const initialState = {
  to: ["Regina Cooper"],
  cc: "",
  bcc: "",
  subject: "Order Status #24197118",
  message: "",
};

const ComposeModal = ({
  open,
  onClose,
  onSend,
  onSaveDraft,
}) => {
  console.log("OPEN:", open);

  const [form, setForm] = useState(initialState);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClose = () => {
    setForm({
      ...initialState,
      to: [...initialState.to],
    });

    onClose?.();
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleRemoveRecipient = (index) => {
    updateField(
      "to",
      form.to.filter((_, i) => i !== index)
    );
  };

  const handleSend = () => {
    onSend?.(form);
    handleClose();
  };

  const handleDraft = () => {
    onSaveDraft?.(form);
    handleClose();
  };

  return (
<div className="fixed inset-0 z-[9999] flex items-end justify-end bg-black/30 p-5 backdrop-blur-[1px] compose-modal-overlay">
<div className="compose-modal flex h-[690px] w-[630px] flex-col overflow-auto rounded-xl bg-white shadow-2xl">

        <ComposeHeader
          title="New Message"
          onClose={handleClose}
        />

        <div className="space-y-6 p-6">

          <ComposeRecipients
            recipients={form.to}
            onRemove={handleRemoveRecipient}
            cc={form.cc}
            bcc={form.bcc}
            onChange={updateField}
          />

          <ComposeSubject
            value={form.subject}
            onChange={(value) =>
              updateField("subject", value)
            }
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-[#6B7280]">
              Message
            </label>

            <div className="overflow-hidden rounded-xl border border-[#E5E7EB]">
              <ComposeToolbar />

              <ComposeEditor
                value={form.message}
                onChange={(value) =>
                  updateField("message", value)
                }
              />
            </div>
          </div>

          <ComposeAttachments />

        </div>

        <ComposeFooter
          form={form}
          onSend={handleSend}
          onSaveDraft={handleDraft}
        />

      </div>
    </div>
  );
};

export default ComposeModal;