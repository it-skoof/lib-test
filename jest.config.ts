import {Config} from 'jest'

export default {
    transform: {
        '\\.[jt]sx?$': 'ts-jest',
    },
    testMatch: ['**\\__test__\\**'],
    transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\\/]+$"],
    coveragePathIgnorePatterns: ["/node_modules/"]
} as Config