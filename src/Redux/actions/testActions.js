export const TEST_VALUE = "TEST_VALUE";

export function testValue(input) {
    return {
        type: TEST_VALUE,
        payload: {
            testValue: input,
        }
    }
}