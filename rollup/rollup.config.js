export default {
  // Add extra entry points here if there are multiple to build
  input: ['src/app.js'],
  
  output: [
    // ES module build
    {
      dir: 'dist/esm',
      format: 'esm'
    },
    // SystemJS build
    {
      dir: 'dist/system',
      format: 'system'
    }
  ],

  // disable external module warnings
  // (JSPM / the import map handles these for us instead)
  onwarn (warning, warn) {
    if (warning.code === 'UNRESOLVED_IMPORT')
      return;
    warn(warning);
  }
};
