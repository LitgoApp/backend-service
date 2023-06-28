type Location = {
  latitude: number
  longitude: number
}

/**
 * Calculate the distance between two locations in meters
 * @param loc1 number
 * @param loc2 number
 * @returns Distance between loc1 and loc2 in meters
 */
export default function distance(loc1: Location, loc2: Location) {
  const R = 6371e3 // metres
  const φ1 = (loc1.latitude * Math.PI) / 180 // φ, λ in radians
  const φ2 = (loc2.latitude * Math.PI) / 180
  const Δφ = ((loc2.latitude - loc1.latitude) * Math.PI) / 180
  const Δλ = ((loc2.longitude - loc1.longitude) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const d = R * c // in meters
  return d
}
