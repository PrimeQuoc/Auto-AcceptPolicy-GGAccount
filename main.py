import os
import sys
import subprocess
from subprocess import Popen, PIPE, STDOUT

#Read data file
def readFile(fileName): 
    f = open(fileName, "r")
    return f.read()

def prepareData(data):
    data = data.split("\n")
    data = [_.split(":::") for _ in data]
    if (data[-1:] == ['']):
        del data[-1:]
    return data

if __name__ == "__main__":
    #Read arg command
    if (len(sys.argv) != 2): 
        print("The expected command's: python [executed python file] [data file]")
        quit()
    #Read file
    dataFileName = sys.argv[1]
    data = readFile(dataFileName)
    data = prepareData(data)
    print(data)
    
    #Create multithread
    #p = Popen("", shell=True, stdin=PIPE, stdout=PIPE)  
    for account in data:
        commands = ["phantomjs", "bin/index.js", account[0], account[1] ]
        cmd = " ".join(commands)
        os.system(cmd)
