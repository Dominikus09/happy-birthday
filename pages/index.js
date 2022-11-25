import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";

export default function Index() {
  const [note, setNote] = useState([
    {
      id: 1,
      isi: "",
      status: "1",
    },
  ]);
  const [edit, setEdit] = useState(false);
  function handelOnChange(e, i) {
    const { name, value } = e.target;
    setNote((prev) =>
      prev.map((item, index) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  }
  function handelPlus(e) {
    setNote((pev) => [...pev, e]);
  }

  function getdata() {
    const getNote = localStorage.getItem("note");
    if (getNote) {
      setNote(JSON.parse(getNote));
    }
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <Layout title={"Home"}>
      <div>
        <h1 className="py-4">My Note</h1>
        <div className="border border-pink-400 p-2 rounded-md">
          <div className="border relative border-pink-400 rounded-md p-3 flex flex-col items-center w-full sm:w-fit min-h-[300px]">
            <div
              className="absolute text-[11px] right-3 top-2 cursor-pointer text-pink-400 hover:text-pink-300"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </div>
            <h3 className="py-4 text-pink-400 font-medium">My Daily Note</h3>
            <div className="space-y-3 py-3">
              {note.map((item, index) => (
                <div className="flex space-x-2 w-fit items-center" key={index}>
                  <input
                    type="checkbox"
                    name="status"
                    value={item.status === "1" ? "2" : "1"}
                    onChange={(e) => {
                      handelOnChange(e, index);
                    }}
                  />
                  <div>
                    {edit ? (
                      <textarea
                        name="isi"
                        type="text"
                        cols="40"
                        rows="3"
                        placeholder="your note"
                        className="px-2 text-xs py-1 mt-1 resize-y bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-pink-400 focus:ring-pink-400 block w-full rounded-md sm:text-sm focus:ring-1"
                        value={item.isi}
                        disabled={!edit}
                        onChange={(e) => {
                          handelOnChange(e, index);
                        }}
                      ></textarea>
                    ) : (
                      <p
                        className={`w-60 text-xs indent-5 ${
                          item.status !== "1" ? "line-through" : ""
                        }`}
                      >
                        {item.isi}
                      </p>
                    )}
                  </div>
                  <div
                    className="border px-2 text-white rounded-md h-fit flex flex-col items-center justify-center cursor-pointer bg-pink-400 hover:bg-pink-300 text-[9px]"
                    style={{ display: `${edit ? "" : "none"}` }}
                    onClick={() => {
                      setNote((prev) =>
                        note.filter((value) => value.id !== item.id)
                      );
                    }}
                  >
                    Min
                  </div>
                </div>
              ))}
            </div>
            <div className="py-2">
              <button
                style={{ display: `${edit ? "" : "none"}` }}
                className="border bg-pink-400 rounded-sm text-white flex flex-col items-center justify-center h-fit hover:bg-pink-300 cursor-pointer"
                onClick={() => {
                  if (note.length === 0) {
                    localStorage.setItem(
                      "note",
                      JSON.stringify([
                        {
                          id: 1,
                          isi: "",
                          status: "1",
                        },
                      ])
                    );
                    getdata();
                  } else {
                    handelPlus({
                      id: note[note.length - 1].id + 1,
                      isi: "",
                      status: "1",
                    });
                  }
                }}
              >
                <div className="px-1 text-[10px]">add</div>
              </button>
            </div>

            <button
              style={{ display: `${edit ? "" : "none"}` }}
              className="w-full py-1 rounded-md text-white bg-pink-400 text-xs"
              onClick={() => {
                setEdit(false);
                localStorage.setItem("note", JSON.stringify(note));
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
