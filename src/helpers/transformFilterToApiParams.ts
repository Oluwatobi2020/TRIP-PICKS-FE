// utils/transformHotelFilters.ts

const AMENITY_MAP: Record<string, string> = {
  internetAccess: "Internet Access",
  wheelChairAccessible: "Wheel chair accessible",
  elevator: "Lift",
  familyRooms: "Family Rooms",
  nonSmokingRooms: "Non smoking rooms",
  restaurant: "Restaurant",
};

const FACILITY_MAP: Record<string, string> = {
  internetAccess: "Internet Access",
  wheelChairAccessible: "Wheel chair accessible",
  elevator: "Lift",
  familyRooms: "Family Rooms",
  nonSmokingRooms: "Non smoking rooms",
  restaurant: "Restaurant",
};

const POPULAR_FILTERS: Record<string, string> = {
  internetAccess: "Internet Access",
  wheelChairAccessible: "Wheel chair accessible",
  elevator: "Lift",
  familyRooms: "Family Rooms",
};

type BooleanRecord = Record<string, boolean>;

const toApiArray = (
  obj: BooleanRecord | undefined | null,
  map: Record<string, string>,
): string[] => {
  if (!obj) return [];

  return Object.entries(obj)
    .filter(([, isSelected]) => isSelected)
    .map(([key]) => map[key])
    .filter(Boolean);
};

export const transformFiltersToApiParams = (values: any) => {
  if (!values) return {};

  const popularFilterValues = toApiArray(
    values.popularFilters,
    POPULAR_FILTERS,
  );
  const selectedAmenities = toApiArray(values.amenities, AMENITY_MAP);
  const selectedFacilities = toApiArray(values.facilities, FACILITY_MAP);

  return {
    // ✅ always include these regardless of value
    guests: values.guests,
    minPrice: values.minPrice,
    maxPrice: values.maxPrice,
    minRating: values.minRating,
    sortBy: values.sortBy,
    sortOrder: values.sortOrder,
    page: values.page,
    limit: values.limit,

    // ✅ only include if non-empty strings
    ...(values.location && { location: values.location }),
    ...(values.checkIn && { checkIn: values.checkIn }),
    ...(values.checkOut && { checkOut: values.checkOut }),
    ...(values.categoryId && { categoryId: values.categoryId }),
    ...(values.arrivalTime && { arrivalTime: values.arrivalTime }),
    ...(values.departureTime && { departureTime: values.departureTime }),
    ...(values.duration && { duration: values.duration }),

    // ✅ only include if user selected at least one
    ...(popularFilterValues.length > 0 && {
      popularFilters: popularFilterValues,
    }),
    ...(selectedAmenities.length > 0 && { amenities: selectedAmenities }),
    ...(selectedFacilities.length > 0 && { facilities: selectedFacilities }),
  };
};
