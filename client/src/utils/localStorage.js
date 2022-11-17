export const getSavedHotelIds = () => {
    const savedHotelIds = localStorage.getItem('saved_hotels')
      ? JSON.parse(localStorage.getItem('saved_hotels'))
      : [];
  
    return savedHotelIds;
  };
  
  export const saveHotelIds = (hotelsIdArr) => {
    if (hotelsIdArr.length) {
      localStorage.setItem('saved_hotels', JSON.stringify(hotelsIdArr));
    } else {
      localStorage.removeItem('saved_hotels');
    }
  };
  
  export const removeHotelId = (hotelId) => {
    const savedHotelIds = localStorage.getItem('saved_hotels')
      ? JSON.parse(localStorage.getItem('saved_hotels'))
      : null;
  
    if (!savedHotelIds) {
      return false;
    };
  
    const updatedSavedHotelIds = savedHotelIds?.filter((savedHotelId) => savedHotelId !== hotelId);
    localStorage.setItem('saved_hotels', JSON.stringify(updatedSavedHotelIds));
  
    return true;
  };