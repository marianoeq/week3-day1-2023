/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["dist"],
  //resolver: "jest-ts-webcompat-resolver",
};

// Este archivo le avisa a jest que vamos a usar Typescript para testear
