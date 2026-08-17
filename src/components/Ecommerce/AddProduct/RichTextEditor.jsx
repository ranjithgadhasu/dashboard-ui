import {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnBulletList,
  BtnNumberedList,
  BtnUndo,
  BtnRedo,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";

const RichTextEditor = ({ value, onChange }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-[#EEF2F6] bg-white">

      <EditorProvider>

        <Toolbar
          style={{
            borderBottom: "1px solid #EEF2F6",
            background: "#FAFAFA",
            padding: "10px",
          }}
        >
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnBulletList />
          <BtnNumberedList />
          <BtnUndo />
          <BtnRedo />
        </Toolbar>

        <Editor
          value={value}
          onChange={(e) => onChange(e.target.value)}
          containerProps={{
            style: {
              minHeight: "140px",
            },
          }}
        />

      </EditorProvider>

    </div>
  );
};

export default RichTextEditor;