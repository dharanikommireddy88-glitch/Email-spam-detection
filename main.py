import pandas as pd

data = pd.read_csv("spam.csv", encoding="latin-1")

data = data.iloc[:, :2]
data.columns = ["label", "message"]

print(data.head())
print("Rows:", data.shape[0])
print("Columns:", data.shape[1])