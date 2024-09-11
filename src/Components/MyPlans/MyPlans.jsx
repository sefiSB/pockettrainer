import { useState } from "react";
import { dummyPlans } from "../../store/store";
import plandata from "../../store/plandata.json";
function MyPlans({ user }) {
  const [activePlan, setActivePlan] = useState("");
  return (
    <>
      <div>
        {plandata.map((elem, i) => {
          return (
            <>
              {user === elem.user ? (
                <>
                  {elem.plans.map((t, j) => {
                    return (
                      <>
                        <div
                          onClick={() => setActivePlan(t.title)}
                          key={i}
                          class="border border-sky-500"
                        >
                          <h1>{t.title}</h1>
                          {activePlan === t.title ? (
                            <>
                              {t.exercises.map((e, k) => {
                                return (
                                  <>
                                    <big><strong><h2>{e.name}</h2></strong></big>
                                    <ul>
                                      {e.reps.map((r, l) => {
                                        return (
                                          <>
                                            <li className="ml-10">
                                              {r} reps - {e.weights[l]} kg
                                            </li>
                                          </>
                                        );
                                      })}
                                    </ul>
                                  </>
                                );
                              })}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default MyPlans;
