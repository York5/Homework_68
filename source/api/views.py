import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def numbers_add_v1(request, *args, **kwargs):
    if request.body:
        request_data = json.loads(request.body)
        first_number = request_data['A']
        second_number = request_data['B']
        if type(first_number) and type(second_number) == int:
            numbers_sum = first_number + second_number
            response = JsonResponse({'answer': numbers_sum})
        else:
            response = JsonResponse({'error': 'You must only submit digits!'})
            response.status_code = 400
    else:
        response = JsonResponse({'error': 'No data provided!'})
        response.status_code = 400
    return response


@csrf_exempt
def numbers_subtract_v1(request, *args, **kwargs):
    if request.body:
        request_data = json.loads(request.body)
        first_number = request_data['A']
        second_number = request_data['B']
        if type(first_number) and type(second_number) == int:
            numbers_difference = first_number - second_number
            response = JsonResponse({'answer': numbers_difference})
        else:
            response = JsonResponse({'error': 'You must only submit digits!'})
            response.status_code = 400
    else:
        response = JsonResponse({'error': 'No data provided!'})
        response.status_code = 400
    return response


@csrf_exempt
def numbers_multiply_v1(request, *args, **kwargs):
    if request.body:
        request_data = json.loads(request.body)
        first_number = request_data['A']
        second_number = request_data['B']
        if type(first_number) and type(second_number) == int:
            numbers_product = first_number * second_number
            response = JsonResponse({'answer': numbers_product})
        else:
            response = JsonResponse({'error': 'You must only submit digits!'})
            response.status_code = 400
    else:
        response = JsonResponse({'error': 'No data provided!'})
        response.status_code = 400
    return response


@csrf_exempt
def numbers_divide_v1(request, *args, **kwargs):
    if request.body:
        request_data = json.loads(request.body)
        first_number = request_data['A']
        second_number = request_data['B']
        if type(first_number) and type(second_number) == int:
            if second_number == 0:
                response = JsonResponse({'error': 'Division by Zero!'})
                response.status_code = 400
                return response
            numbers_quotient = first_number / second_number
            response = JsonResponse({'answer': numbers_quotient})
        else:
            response = JsonResponse({'error': 'You must only submit digits!'})
            response.status_code = 400
    else:
        response = JsonResponse({'error': 'No data provided!'})
        response.status_code = 400
    return response
