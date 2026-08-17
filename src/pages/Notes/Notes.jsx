import { useState } from "react";
import { Plus } from "lucide-react";
import NoteCard from "../../components/notes/NoteCard";
import NoteModal from "../../components/notes/NoteModal";
import Filter from "../../assets/images/Filter.png";
import AddNoteModal from "../../components/notes/AddNoteModal";
import { notesData } from "../../components/notes/data/notesData";

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
 <>
    <div className="min-h-screen bg-[#F7F7F7] px-6 py-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-[28px] font-medium text-[#3F4149]">Notes</h1>

        <div className="flex items-center gap-3">
          {/* Filter */}
          <button
            type="button"
            className="
              w-10
              h-10
              rounded-xl
              bg-white
              flex
              items-center
              justify-center
              text-gray-600
              shadow-sm
              hover:bg-gray-50
              transition
            "
          >
            <img src={Filter} alt="Filter" size={15} />
          </button>

          {/* Add Note */}
          <button
          onClick={() => setOpenAddModal(true)}
            type="button"
            className="
              flex
              items-center
              gap-2
              bg-[#218C3A]
              hover:bg-[#197832]
              text-white
              text-[12px]
              font-medium
              px-4
              h-[40px]
              rounded-md
              transition
            "
          >
            <Plus size={16} />
            Add Note
          </button>
        </div>
      </div>

      {/* Notes Grid */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-x-5
          gap-y-5
        "
      >
      {notesData.map((note) => (
  <NoteCard
    key={note.id}
    note={note}
    onClick={() => setSelectedNote(note)}
  />
))}
      </div>
    </div>
    <NoteModal
  open={!!selectedNote}
  note={selectedNote}
  onClose={() => setSelectedNote(null)}
/>
<AddNoteModal
  open={openAddModal}
  onClose={() => setOpenAddModal(false)}
/>
 </>
  );
};

export default Notes;
