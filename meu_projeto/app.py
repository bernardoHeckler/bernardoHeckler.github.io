from flask import Flask, render_template, request
import openpyxl

app = Flask(__name__)

# Caminho da planilha
planilha_caminho = 'data/mensagens.xlsx'

# Rota principal
@app.route('/')
def index():
    return render_template('index.html')

# Rota para processar o envio do formulário
@app.route('/enviar', methods=['POST'])
def enviar():
    nome = request.form['nome']
    email = request.form['email']
    celular = request.form['celular']
    mensagem = request.form['mensagem']

    # Adicionar na planilha
    workbook = openpyxl.load_workbook(planilha_caminho)
    sheet = workbook.active
    sheet.append([nome, email, celular, mensagem])
    workbook.save(planilha_caminho)

    return "Mensagem enviada com sucesso! Obrigado."

if __name__ == '__main__':
    app.run(debug=True)
