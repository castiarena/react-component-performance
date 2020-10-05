module.exports = {
    rootDir: '.',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
    testPathIgnorePatterns: ['<rootDir>/app/__mocks__/*'],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/app/**/*.ts{,x}',
        '!<rootDir>/app/**/*.spec.ts{,x}',
    ],
    coverageThreshold: {
        global: {
            statements: 95.12,
            branches: 84.44,
            lines: 96,
            functions: 86.81,
        },
    },
};
