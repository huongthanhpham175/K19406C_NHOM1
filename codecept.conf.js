// import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// // turn on headless mode when running with HEADLESS=true environment variable
// // export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// // enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
// setCommonPlugins();

// export const config: CodeceptJS.MainConfig = {
//   tests: './*_test.ts',
//   output: './output',
//   helpers: {
//     Playwright: {
//       url: 'http://localhost',
//       show: true,
//       browser: 'chromium'
//     }
//   },
//   include: {
//     I: './steps_file'
//   },
//   name: 'K19406C_NHOM1',
//   fullPromiseBased: false
// }

exports.config = {
    output: './output',
    helpers: {
        Playwright: {
            url: 'http://localhost',
            show: true,
            browser: 'chromium',
            windowSize: '1900x800'
        }
    },
    include: {
        I: './steps_file.js'
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: './step_definitions/*.js'
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        }
    },
    tests: 'feature/*.js',
    name: 'K19406C_NHOM1'
}