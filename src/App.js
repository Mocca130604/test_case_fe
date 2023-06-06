import "./App.css";
import { useState } from "react";

function App() {
  const [isSave, setIsSave] = useState(false);
  const [storage, setStorage] = useState([]);
  const AspectScoreArray = {
    aspek_penilaian_1: {},

    aspek_penilaian_2: {},

    aspek_penilaian_3: {},

    aspek_penilaian_4: {},
  };

  const ScoreList = () => {
    const ScoreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return ScoreArray.map((score, i) => {
      return (
        <option key={i} value={score}>
          {score}
        </option>
      );
    });
  };

  const nameFormater = (name) => {
    const lowerCase = name.toLowerCase();
    return lowerCase.replace(/ /g, "_");
  };

  const SaveAspectScore = (value, aspect, name) => {
    const formatedName = nameFormater(name);
    switch (aspect) {
      case 1:
        AspectScoreArray.aspek_penilaian_1[formatedName] = value;
        console.log("aspek_penilaian_1", AspectScoreArray.aspek_penilaian_1);
        break;
      case 2:
        AspectScoreArray.aspek_penilaian_2[formatedName] = value;
        console.log("aspek_penilaian_2", AspectScoreArray.aspek_penilaian_2);
        break;
      case 3:
        AspectScoreArray.aspek_penilaian_3[formatedName] = value;
        console.log("aspek_penilaian_3", AspectScoreArray.aspek_penilaian_3);
        break;
      case 4:
        AspectScoreArray.aspek_penilaian_4[formatedName] = value;
        console.log("aspek_penilaian_4", AspectScoreArray.aspek_penilaian_4);
        break;
    }
    // PushData();
  };

  const save = () => {
    setIsSave(!isSave);
  };

  const StudentList = () => {
    const StudentArray = [
      "Mahasiswa 1",
      "Mahasiswa 2",
      "Mahasiswa 3",
      "Mahasiswa 4",
      "Mahasiswa 5",
      "Mahasiswa 6",
      "Mahasiswa 7",
      "Mahasiswa 8",
      "Mahasiswa 9",
      "Mahasiswa 10",
    ];
    return StudentArray.map((student, i) => {
      return (
        <tr key={i} className="bg-white border-y ">
          <th
            scope="col"
            className="px-6 py-4 gap-2 font-medium text-gray-900 whitespace-nowrap flex align-center"
          >
            <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-9 h-9 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <p>{student}</p>
          </th>
          <td className="px-6 py-4">
            <select
              onChange={(e) => {
                SaveAspectScore(e.target.value, 1, student);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="score-1"
              id="score-1"
            >
              <option>Masukan Nilai</option>
              <ScoreList />
              {/* <option value="1">1</option> */}
            </select>
          </td>
          <td className="px-6 py-4">
            <select
              onChange={(e) => {
                SaveAspectScore(e.target.value, 2, student);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="score-2"
              id="score-2"
            >
              <option>Masukan Nilai</option>
              <ScoreList />
            </select>
          </td>
          <td className="px-6 py-4">
            <select
              onChange={(e) => {
                SaveAspectScore(e.target.value, 3, student);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="score-3"
              id="score-3"
            >
              <option>Masukan Nilai</option>
              <ScoreList />
            </select>
          </td>
          <td className="px-6 py-4">
            <select
              onChange={(e) => {
                SaveAspectScore(e.target.value, 4, student);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="score-4"
              id="score-4"
            >
              <option>Masukan Nilai</option>
              <ScoreList />
            </select>
          </td>
        </tr>
      );
    });
  };

  const Modal = () => {
    return (
      <div
        id="defaultModal"
        tabindex="-1"
        class="flex align-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-6 space-y-6">AspectScoreArray.aspek_penilaian_1</div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="container p-10">
        <h1 className="text-3xl">Aplikasi Penilaaian Mahasiswa</h1>

        <div className="relative overflow-x-auto mt-10">
          <table className="w-full text-sm text-left">
            <thead className="text-xs">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Aspek Penilaian 1
                </th>
                <th scope="col" className="px-6 py-3">
                  Aspek Penilaian 2
                </th>
                <th scope="col" className="px-6 py-3">
                  Aspek Penilaian 3
                </th>
                <th scope="col" className="px-6 py-3">
                  Aspek Penilaian 4
                </th>
              </tr>
            </thead>
            <tbody>
              <StudentList />
              {/* <tr className="bg-white border-y ">
                <td
                  scope="col"
                  className="px-6 py-4 gap-2 font-medium text-gray-900 whitespace-nowrap flex align-center"
                >
                  <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute w-9 h-9 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p>Apple MacBook Pro 17"</p>
                </td>
                <td className="px-6 py-4">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="score-1"
                    id="score-1"
                  >
                    <ScoreList />
                    <option value="1">1</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="score-2"
                    id="score-2"
                  >
                    <ScoreList />
                  </select>
                </td>
                <td className="px-6 py-4">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="score-3"
                    id="score-3"
                  >
                    <ScoreList />
                  </select>
                </td>
                <td className="px-6 py-4">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="score-4"
                    id="score-4"
                  >
                    <ScoreList />
                  </select>
                </td>
              </tr> */}
            </tbody>
          </table>
          <div className="flex justify-end">
            <button
              onClick={save}
              type="button"
              className="mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default App;
