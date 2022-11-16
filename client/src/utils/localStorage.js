export const getSavedBookIds = () => {
    const savedBookIds = localStorage.getItem('saved_hotels')
      ? JSON.parse(localStorage.getItem('saved_hotels'))
      : [];
  
    return savedBookIds;
  };
  
  export const saveHotelIds = (hotelsIdArr) => {
    if (hotelIdArr.length) {
      localStorage.setItem('saved_hotels', JSON.stringify(hotelsIdArr));
    } else {
      localStorage.removeItem('saved_hotels');
    }
  };
  
  export const removeHotelId = (hotelsId) => {
    const savedHotelsIds = localStorage.getItem('saved_hotels')
      ? JSON.parse(localStorage.getItem('saved_hotels'))
      : null;
  
    if (!savedHotelIds) {
      return false;
    }
  
    const updatedSavedHotelIds = savedHotelIds?.filter((savedHotelId) => savedHotelId !== HotelId);
    localStorage.setItem('saved_hotels', JSON.stringify(updatedSavedHotelIds));
  
    return true;
  };