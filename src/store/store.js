import fs from 'fs';

export const save = (obj) => {
  let plandata= readPlandata()

  plandata = plandata.map((elem) => {
    if (elem.user === obj.user) {
      // Visszatérítjük a frissített felhasználói tervet
      return {
        ...elem,
        plans: [...elem.plans, obj.plan],
      };
    } else {
      // Ha a felhasználó nem egyezik, változatlanul visszatérítjük
      return elem;
    }
  });
  writePlandata(plandata)
  console.log(plandata);
};


// JSON fájl írása
const readPlandata = () => {
  const data = fs.readFileSync('./plandata.json', 'utf8');
  return JSON.parse(data);
};


// JSON fájl írása
const writePlandata = (plans) => {
  fs.writeFileSync('./plandata.json', JSON.stringify(plans, null, 2), 'utf8');
};



export let dummyPlans = [
  {
    user: "sef",
    plans: [
      {
        title: "Push1",
        exercises: [
          {
            id: 0,
            name: "Fekvenyomás",
            weights: [65, 70, 75, 75, 70, 65],
            reps: [12, 8, 6, 5, 8, 10],
            comment: "Ez jó volt :)",
          },
          {
            id: 1,
            name: "Tárogatás",
            weights: [12, 12, 12, 12],
            reps: [16, 12, 10, 10],
            comment: "Ez is jó volt :)",
          },
        ],
      },
      {
        title: "Pusll",
        exercises: [
          {
            id: 0,
            name: "Húzóckodás",
            weights: [65, 70, 75, 75, 70, 65],
            reps: [12, 8, 6, 5, 8, 10],
            comment: "Ez jó volt :)",
          },
          {
            id: 1,
            name: "Bicepsz",
            weights: [12, 12, 12, 12],
            reps: [16, 12, 10, 10],
            comment: "Ez is jó volt :)",
          },
        ],
      },
    ],
  },
  {
    user: "valakimás",
    plans: [
      {
        title: "Láb",
        exercises: [
          {
            id: 0,
            name: "Guggolás",
            weights: [65, 70, 75, 75, 70, 65],
            reps: [12, 8, 6, 5, 8, 10],
            comment: "Ez jó volt :)",
          },
          {
            id: 1,
            name: "Tárogatás",
            weights: [12, 12, 12, 12],
            reps: [16, 12, 10, 10],
            comment: "Ez is jó volt :)",
          },
        ],
      },
      {
        title: "Has",
        exercises: [
          {
            id: 0,
            name: "Húzóckodás",
            weights: [65, 70, 75, 75, 70, 65],
            reps: [12, 8, 6, 5, 8, 10],
            comment: "Ez jó volt :)",
          },
          {
            id: 1,
            name: "Bicepsz",
            weights: [12, 12, 12, 12],
            reps: [16, 12, 10, 10],
            comment: "Ez is jó volt :)",
          },
        ],
      },
    ],
  },
];

