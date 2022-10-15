package com.backed.interceptor;

import org.springframework.util.ObjectUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("1");
//        request.getSession().setAttribute("users",true);
        System.out.println(request.getSession().getAttribute("users"));

        if (request.getSession().getAttribute("users") != null){
            boolean flag = (boolean) request.getSession().getAttribute("users");
            System.out.println(flag + "__");

            if (flag){
                System.out.println("3");
                return true;
            }
        }
        System.out.println("4");
        response.sendRedirect("/demo_war/login__.html");
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
