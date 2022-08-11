const MEOW = 'meow';

/*
    exports.voice = (n) => `"${Array(n).fill(MEOW).join(' ')}"`;
*/

const voice = n => `"${Array(n).fill(MEOW).join(' ')}"`;
export { voice };

// export default voice;
