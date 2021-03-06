export const addTour = (id, name, about, price, rate, active) => ({
  type: "ADD_TOUR",
  tour: {
    id: id,
    name: name,
    about: about,
    price: price,
    rate: rate,
    active: true,
  }
})

// в диспатч кинуть addTour, а в него передать id, name, price

export const sortTours = (tours) => ({
  type: "sortTours",
  tours: tours,
})

export const getToursFromDB = (tours) => ({
  type: "getToursFromDB",
  tours: tours,
})

export const updateTourPage = (tour) => ({
  type: "GET_ONE_TOUR",
  tour: tour,
})

export const loadMoreTours = (tours) => ({
  type: "LOAD_MORE_TOURS",
  newTours: tours,
})