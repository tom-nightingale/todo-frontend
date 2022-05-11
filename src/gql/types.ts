export type Circuit = {
    circuitId: string,
    url: string,
    circuitName: string,
    Location: Location,
}

export type Constructor = {
    carImage: string,
    color: string,
    constructorId: string,
    url: string,
    name: string,
    nationality: string,
    drivers: Driver,
    result: Results,
    standing: Standing,
}

export type Driver = {
    driverId: string,
    code: string,
    url: string,
    givenName: string,
    familyName: string,
    dateOfBirth: string,
    nationality: string,
    getConstructor: Constructor,
    lapTimes: Lap,
    result: Results,
    standing: Standing,
    status: Status,
}

export type Standing = {
  position: number,
  positionText: string,
  points: string,
  wins: number,
  Driver: Driver,
  Constructors: Constructor,
}

export type Location = {
  lat: number
  long: number
  locality: string
  country: string
}

export type Status = {
  id: string,
  count: number,
  status: string,
}

export type Results = {
  race: Race,
  results: Result,
}

export type Result = {
  number: number,
  position: number,
  points: string,
  grid: number,
  laps: number,
  status: string,
  fastestLap: FastestLap,
  Driver: Driver,
}

export type Race = {
  season: number,
  round: number,
  url: string,
  raceName: string,
  date: string,
  time: string,
  Circuit: Circuit,
}

export type FastestLap = {
  rank: number,
  lap: number,
  Time: Time,
  AverageSpeed: AverageSpeed,
}

export type Lap = {
  number: number,
  Timings: Timing,
}

export type Timing = {
  driverId: string,
  position: number,
  time: string,
}

export type AverageSpeed = {
  units: number,
  speed: number,
}

export type Time = {
  millis: number,
  time: string,
}

export type Schedule = {
  season: number
  round: number,
  raceName: string
  date: string,
  time: string,
  Circuit: Circuit,
}