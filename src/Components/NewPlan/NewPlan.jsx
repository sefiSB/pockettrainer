import { useState } from "react";
import NewExercise from "../NewExercise/NewExercise";
import { save } from "../../store/store";
function NewPlan({ user }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [counter, setCounter] = useState(0);
  const addNew = (exercise) => {
    setExerciseList([...exerciseList, exercise]);
    setCounter(counter + 1);
  };
  const [title, setTitle] = useState("");

  const savePlan = () => {
    save({
      user: user,
      plan: {
        title: title,
        exercises: exerciseList,
      },
    });
    console.log(exerciseList);
  };

  return (
    <>
      <>
        <div className="container pt-10">
          <form class="max-w-sm mx-auto">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                value={title}
                type="text"
                id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              {exerciseList.length !== 0 ? (
                <>
                  <div className="border-double border-4 border-green-400 p-5 m-5">
                    {exerciseList.map((elem) => {
                      return (
                        <>
                          <h2 className="text-left">
                            <big>
                              <strong>{elem.name}</strong>
                            </big>
                          </h2>
                          <ul>
                            {elem.reps.map((r, i) => {
                              return (
                                <li className="ml-10">
                                  {r} reps - {elem.weights[i]} kg{" "}
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      );
                    })}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <NewExercise addExercise={addNew} id={counter} />
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                savePlan();
              }}
            >
              Save to plans
            </button>
          </form>
        </div>
      </>
    </>
  );
}

export default NewPlan;
