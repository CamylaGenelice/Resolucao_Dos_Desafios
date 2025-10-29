'''
file = open('teste.txt', 'w')

file.write('Hello, World!')
ler = open('teste.txt', 'r')
conteudo = ler.read()
print(conteudo)
file.close()
'''
import sys
import os 

sys.path.append('../documentos')


def leitura_arquivo(url):
    try:
        file = open(url, 'r', encoding='utf-8')
        conteudo = file.read()
        file.close()
        return conteudo
    except FileNotFoundError:
        print("Arquivo não encontrado.")
        return None    
 
def escrita_arquivo(url, conteudo):
    try:
        file = open(url, 'w', encoding='utf-8')
        file.write(conteudo)
        file.close()
        
    except FileNotFoundError:
        print("Arquivo não encontrado.")
        
    
def extensao (url):
    
    extension = os.path.splitext(url)[1]   
    print(f'A extensão do arquivo é: {extension}')
    
'''conteudo = escrita_arquivo('DESAFIO_4/documentos/teste.txt', 'Nova linha de texto.')
print(conteudo) '''

extensao('DESAFIO_4/documentos/teste.txt')

