import ReCAPTCHA from "react-google-recaptcha"
const Captcha = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="6LespMkhAAAAAENHphwKFx5mos2rTSCRePd1whXG"
        onChange={onChange}
      />
    </div>
  );
};

export default Captcha;