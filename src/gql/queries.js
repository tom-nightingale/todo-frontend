import {gql} from 'graphql-request';

/* Constructors */
export const GET_CONSTRUCTORS_BY_YEAR = gql `
	query getConstructorsByYear($year: Int!) {
		constructors(year: $year) {
			carImage
			color
			constructorId
			url
			name
			nationality
      		standing(year: $year) {
				position
				positionText
				points
				wins
			}
  		}
	}
`;

export const GET_CONSTRUCTOR_BY_ID = gql `
	query getConstructorById($constructorId: String!) {
		getConstructor(constructorId: $constructorId) {
			carImage
			color
			constructorId
			url
			name
			nationality
		}
	}
`;

/* Circuits */
export const GET_CIRCUITS_BY_YEAR = gql`
	query GetCircuitsByYear($year: Int!) {
		circuits(year: $year) {
			circuitId
			url
			circuitName
			Location {
				lat
				long
				locality
				country
			}
		}
	}
`;

export const GET_CIRCUIT_BY_ID = gql`
	query GetCircuitById($circuitId: String!) {
		circuit(circuitId: $circuitId) {
			circuitId
			url
			circuitName
			Location {
				lat
				long
				locality
				country
			}
		}
	}
`;

export const GET_SCHEDULE_BY_YEAR = gql`
	query GetCircuitsByYear($year: Int!) {
		schedule (year: $year) {
			season
			round
			raceName
			date
			time
			Circuit {
				circuitId
				circuitName
			}
		}
	}
`;

/* Drivers */
export const GET_DRIVERS_BY_YEAR = gql`
	query GetDriversByYear($year: Int!) {
		drivers(year: $year) {
			driverId
			code
			url
			givenName
			familyName
			dateOfBirth
			nationality
			standing(year: $year) {
				position
				positionText
				points
				wins
			}
			getConstructor(year: $year) {
				carImage
				color
				constructorId
				url
				name
				nationality
				drivers(year: $year) {
					driverId
					code
					url
					givenName
					familyName
					dateOfBirth
					nationality
				}
				standing(year: $year) {
					position
					positionText
					points
					wins
				}
			}
		}
	}
`;

export const GET_DRIVER_BY_ID = gql `
	query GetDriverById($driverId: String!) {
		driver(driverId: $driverId) {
			driverId
			code
			url
			givenName
			familyName
			dateOfBirth
			nationality
		}
	}
`

/* Results */

