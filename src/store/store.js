export const save = (obj)=>{
    dummyPlans.map((elem,i)=>{
        if(elem.user===obj.user){
            return(
                {
                    user:elem.user,
                    plans:[...plans,obj.plan]
                }
            )
        }
        else{
            return(elem)
        }
    })
}

export const dummyPlans = [
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
