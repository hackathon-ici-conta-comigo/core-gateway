package org.contacomigo.core.gateway.cucumber.stepdefs;

import org.contacomigo.core.gateway.CoregatewayApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = CoregatewayApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
