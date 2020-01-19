import sys, os, csv
import numpy as np
from operator import itemgetter
from tokenizer import WordTokenizer
from classifier import ProductClassifier
model_dir = './models'



tokenizer = WordTokenizer()
tokenizer.load(os.path.join(model_dir, 'tokenizer'))

# Load classifier
classifier = ProductClassifier()
classifier.load(os.path.join(model_dir, 'classifier'))

data = tokenizer.tokenize(["Cambridge wall calender"])
classScores = classifier.classify(data)[0]
print(classScores)
bestValIdx = np.argmax(classScores.values())
bestVal = classScores.values()[bestValIdx]
bestClass = list(classScores)[bestValIdx]
print(bestVal, bestClass)
