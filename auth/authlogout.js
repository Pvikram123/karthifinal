const logout = (req, res) => {
  res
  .clearCookie("access_token")
  .status(200)
  .sendFile(`C:/Users/DELL/karthifinal/HTML/homepage.html`) ;

};
module.exports=logout
