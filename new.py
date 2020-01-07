import sys, json, numpy as np
import pandas as pd
import time

from pymongo import MongoClient

client=MongoClient('mongodb://localhost:27017/')


#Read data from stdin
def read_in():

    lines = sys.stdin.readlines()
    
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()
    
    df=pd.read_excel(lines,encoding="utf8",errors='ignore')
    
    #print(df[0])

    
#start process
if __name__ == '__main__':
    #print("Before",time.time())
    main()
    #print("After",time.time())
