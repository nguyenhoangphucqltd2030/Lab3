import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [isDark, setIsDark] = useState(false);

  const handlePress = (value: string) => {
  
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      try {
        let expr = expression;
  
        // Tự động thêm dấu ) nếu thiếu
        const openBrackets = (expr.match(/\(/g) || []).length;
        const closeBrackets = (expr.match(/\)/g) || []).length;
        if (openBrackets > closeBrackets) {
          expr += ')'.repeat(openBrackets - closeBrackets);
        }
  
        // Replace sin(x), cos(x), tan(x) thành Math.sin(x * Math.PI / 180) để tự động đổi Độ thành Radian
        expr = expr
          .replace(/sin\(/g, 'Math.sin(Math.PI/180*')
          .replace(/cos\(/g, 'Math.cos(Math.PI/180*')
          .replace(/tan\(/g, 'Math.tan(Math.PI/180*');
  
        setResult(eval(expr).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'sin' || value === 'cos' || value === 'tan') {
      setExpression(expression + value + '(');
    } else {
      setExpression(expression + value);
    }
  };
  
  

  const buttons = [
    ['sin', 'cos', 'tan'],
    ['7', '8', '9', 'DEL', 'C'],
    ['4', '5', '6', '*', '/'],
    ['1', '2', '3', '+', '-'],
    ['0', '.', '='],
  ];

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <View style={styles.switchContainer}>
        <Entypo name="light-up" size={22} color={isDark ? "#ccc" : "#333"} />
        <Switch value={isDark} onValueChange={() => setIsDark(!isDark)} />
        <Entypo name="moon" size={24} color={isDark ? "#ccc" : "#333"} />
      </View>

      <Text style={[styles.expression, isDark && styles.darkText]}>{expression}</Text>
      <Text style={[styles.result, isDark && styles.darkText]}>{result}</Text>

      <View style={styles.buttonGrid}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity 
                key={btn} 
                style={[styles.button, isDark && styles.darkButton]}
                onPress={() => handlePress(btn)}
              >
                <Text 
  style={[
    styles.buttonText, 
    isDark && styles.darkText, 
    btn.length > 1 && { fontSize: 18 }  // nếu chữ dài > 1 ký tự, thì tự giảm fontSize
  ]}
>
  {btn}
</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-end',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  expression: {
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 20,
  },
  buttonGrid: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    alignItems: 'center',
  },
  darkButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 24,
  },
  darkText: {
    color: '#fff',
  },
});
