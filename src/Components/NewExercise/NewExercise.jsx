import { list } from "postcss";
import { useState } from "react";

function NewExercise({ addExercise, id }) {
  const [name, setName] = useState("");
  const [rep, setRep] = useState("");
  const [reps, setReps] = useState([]);
  const [weight, setWeight] = useState("");
  const [weights, setWeights] = useState([]);
  const [comment, setComment] = useState("");

  return (
    <div className="m-5">
      <form>
        <input
          type="text"
          placeholder="Exercise name"
          className="input input-bordered input-accent w-full max-w-xs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <ul className="list-none">
          {reps.map((r, i) => {
            
            return (
              <>
                <li>
                  {r} reps - {weights[i]} kg
                </li>
              </>
            );
          })}
        </ul>
        <div class="grid grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Reps"
            class="input input-bordered input-sm w-full max-w-xs m-2 p-2"
            value={rep}
            onChange={(e) => setRep(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weigth"
            class="input input-bordered input-sm w-full max-w-xs m-2 p-2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button
            className="btn btn-neutral w-full max-w-xs m-2 p-2"
            onClick={(e) => {
            
              e.preventDefault();
              setReps([...reps, rep]);
              setWeights([...weights, weight]);
              setRep("");
              setWeight("");
              
            }}
          >
            +
          </button>
        </div>

        <div>
          <input
            type="text"
            placeholder="Comment"
            className="input input-bordered input-lg w-full max-w-xs"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>

        <div className="m-5">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={(e) => {
              e.preventDefault();
              addExercise({
                id: id,
                name: name,
                weights: weights,
                reps: reps,
                comment: comment,
              });
              setReps([])
              setWeights([])
              setName("")
            }}
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add exercise
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewExercise;
