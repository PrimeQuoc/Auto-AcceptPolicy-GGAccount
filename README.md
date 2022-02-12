# Auto-AcceptPolicy-GGACC

This project is written to automatically accept the policy with a new Google account. 

# Installation

To run this project, you need to donwload and install PhantomJs in [here](https://phantomjs.org/download.html)

# Use

You need to prepare the data file with the following format:

```txt
username1:::password1
username2:::password2
...
```

And add this file to the cloned direcotry.

Finnaly, change directory to the cloned folder and run the below command: 
```bash
python main.py [data file name]
